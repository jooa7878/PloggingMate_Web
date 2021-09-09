package KBChallenge.BackEnd.PloggingMate.account.entity;

import KBChallenge.BackEnd.PloggingMate.account.RoleType;
import KBChallenge.BackEnd.PloggingMate.account.dto.AccountAuthDto;
import KBChallenge.BackEnd.PloggingMate.configure.entity.BaseTimeEntity;
import KBChallenge.BackEnd.PloggingMate.configure.entity.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static KBChallenge.BackEnd.PloggingMate.configure.entity.Status.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Account extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @Enumerated(EnumType.STRING)
    private Status status;

    private String nickname;

    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private RoleType role;

    private String profileImage;

    private String address;

    public static Account createAccount(AccountAuthDto dto) {

        return Account.builder()
                .email(dto.getEmail())
                .nickname(dto.getNickname())
                .password(dto.getPassword())
                .address(dto.getAddress())
                .status(VALID)
                .role(RoleType.ROLE_USER)
                .build();
    }


}
