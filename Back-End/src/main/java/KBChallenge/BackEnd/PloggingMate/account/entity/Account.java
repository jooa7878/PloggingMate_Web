package KBChallenge.BackEnd.PloggingMate.account.entity;

import KBChallenge.BackEnd.PloggingMate.account.RoleType;
import KBChallenge.BackEnd.PloggingMate.configure.entity.BaseTimeEntity;
import KBChallenge.BackEnd.PloggingMate.configure.entity.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Account extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @Enumerated(EnumType.STRING)
    private Status status;

    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private RoleType role;

    private String profileImage;

    private String address;


}
