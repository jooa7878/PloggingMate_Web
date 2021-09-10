package KBChallenge.BackEnd.PloggingMate.account;

import KBChallenge.BackEnd.PloggingMate.account.dto.AccountAuthDto;
import KBChallenge.BackEnd.PloggingMate.account.entity.Account;
import KBChallenge.BackEnd.PloggingMate.configure.response.exception.CustomException;
import KBChallenge.BackEnd.PloggingMate.configure.response.exception.CustomExceptionStatus;
import KBChallenge.BackEnd.PloggingMate.configure.security.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static KBChallenge.BackEnd.PloggingMate.configure.entity.Status.VALID;


@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class AccountService {

    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public AccountAuthDto signUp(AccountAuthDto dto) {
        if (accountRepository.findByEmailAndStatus(dto.getEmail(), VALID).isPresent()) throw new CustomException(CustomExceptionStatus.DUPLICATED_EMAIL);
        if (accountRepository.findByNicknameAndStatus(dto.getNickname(), VALID).isPresent()) throw new CustomException(CustomExceptionStatus.DUPLICATED_NICKNAME);

        dto.setPassword(passwordEncoder.encode(dto.getPassword()));
        Account account = Account.createAccount(dto);
        Account save = accountRepository.save(account);
        dto.setAccountId(save.getAccountId());
        dto.setJwt(jwtTokenProvider.createToken(account.getEmail(),account.getRole()));
        return dto;
    }
}
