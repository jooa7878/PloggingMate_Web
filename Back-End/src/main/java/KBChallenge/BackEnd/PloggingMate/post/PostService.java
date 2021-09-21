package KBChallenge.BackEnd.PloggingMate.post;

import KBChallenge.BackEnd.PloggingMate.account.entity.Account;
import KBChallenge.BackEnd.PloggingMate.configure.security.authentication.CustomUserDetails;
import KBChallenge.BackEnd.PloggingMate.post.dto.PostListRes;
import KBChallenge.BackEnd.PloggingMate.util.location.NaverDirection5;
import KBChallenge.BackEnd.PloggingMate.util.location.NaverGeocode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class PostService {

    private final PostRepository postRepository;
    private final NaverGeocode naverGeocode;
    private final NaverDirection5 naverDirection5;

    public List<PostListRes> getPostList(CustomUserDetails customUserDetails) {
        List<PostListRes> list = postRepository.getNoAuthPostList();
        if(customUserDetails ==null)return list;
        Account account = customUserDetails.getAccount();
        String accountCoordinate = naverGeocode.getCoordinate(account.getAddress());
        for (PostListRes postListRes : list) {
            String parkCoordinate = naverGeocode.getCoordinate(postListRes.getAddress());
            postListRes.setDist(naverDirection5.getDistance(accountCoordinate, parkCoordinate));
        }
        Collections.sort(list);
        return list;
    }
}
