package KBChallenge.BackEnd.PloggingMate.post;

import KBChallenge.BackEnd.PloggingMate.post.dto.PostListRes;
import KBChallenge.BackEnd.PloggingMate.post.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {

    @Query(
            "SELECT p FROM Post p " +
                    "INNER JOIN p.park park " +
                    "LEFT JOIN FETCH p.applicants r " +
                    "JOIN FETCH r.account a " +
                    "WHERE p.status = 'VALID' " +
                    "ORDER BY p.reservedAt DESC"
    )
    List<PostListRes> getNoAuthPostList();

}