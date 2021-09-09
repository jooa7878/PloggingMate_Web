package KBChallenge.BackEnd.PloggingMate.account;


import KBChallenge.BackEnd.PloggingMate.account.dto.AccountAuthDto;
import KBChallenge.BackEnd.PloggingMate.configure.response.DataResponse;
import KBChallenge.BackEnd.PloggingMate.configure.response.ResponseService;
import KBChallenge.BackEnd.PloggingMate.util.ValidationExceptionProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/app")
public class AccountController {

    private final ResponseService responseService;
    private final AccountService accountService;

    @PostMapping(value = "/sign-up")
    public DataResponse<AccountAuthDto> signUp(@RequestBody @Valid AccountAuthDto dto, Errors errors){
        if (errors.hasErrors()) ValidationExceptionProvider.throwValidError(errors);
        return responseService.getDataResponse(accountService.signUp(dto));
    }

}
