package KBChallenge.BackEnd.PloggingMate.post;

import KBChallenge.BackEnd.PloggingMate.configure.response.CommonResponse;
import KBChallenge.BackEnd.PloggingMate.configure.response.DataResponse;
import KBChallenge.BackEnd.PloggingMate.configure.response.ResponseService;
import KBChallenge.BackEnd.PloggingMate.configure.security.authentication.CustomUserDetails;
import KBChallenge.BackEnd.PloggingMate.post.dto.PostListRes;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/app")
public class PostController {

    private final ResponseService responseService;
    private final PostService postService;

    @GetMapping(value = "/posts")
    public DataResponse<List<PostListRes>> getPostList(@AuthenticationPrincipal CustomUserDetails customUserDetails) {
        List<PostListRes> postList = postService.getPostList(customUserDetails);
        return responseService.getDataResponse(postList);
    }

    @PostMapping(value = "/posts/{postId}/applications/accounts/auth")
    public CommonResponse chooseOrCancelApplications(@PathVariable(value = "postId") Long postId,
                                                     @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        postService.chooseOrCancelApplications(postId, customUserDetails);
        return responseService.getSuccessResponse();
    }

}
