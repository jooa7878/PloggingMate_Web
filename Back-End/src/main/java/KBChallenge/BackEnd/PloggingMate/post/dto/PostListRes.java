package KBChallenge.BackEnd.PloggingMate.post.dto;

import KBChallenge.BackEnd.PloggingMate.post.entity.Post;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@NoArgsConstructor
@AllArgsConstructor
@Getter
public class PostListRes {

    private Long postId;

    private String contents;

    private LocalDateTime reservedAt;

    private String address;

    private Integer applyCount;

    private Long parkId;

    private String parkName;

    private List<ApplicantRes> accounts = new ArrayList<>();

    public PostListRes(Post post){
        this.postId = post.getPostId();
        this.contents = post.getContents();
        this.reservedAt = post.getReservedAt();
        this.address = post.getAddress();
        this.applyCount = post.getApplyCount();
        this.parkId = post.getPark().getParkId();
        this.parkName = post.getPark().getName();
        accounts = post.getApplicants().stream().map(ApplicantRes::new).collect(Collectors.toList());
    }

}
