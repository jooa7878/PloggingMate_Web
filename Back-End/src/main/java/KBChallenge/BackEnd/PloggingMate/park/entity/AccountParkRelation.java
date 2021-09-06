package KBChallenge.BackEnd.PloggingMate.park.entity;

import KBChallenge.BackEnd.PloggingMate.account.entity.Account;
import KBChallenge.BackEnd.PloggingMate.configure.entity.BaseTimeEntity;
import KBChallenge.BackEnd.PloggingMate.configure.entity.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.FetchType.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class AccountParkRelation extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long relationId;

    @Enumerated(EnumType.STRING)
    private Status status;

    private Boolean isLike;

    private Integer rating;

    private String review;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "accountId")
    private Account account;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "parkId")
    private Park park;


}
