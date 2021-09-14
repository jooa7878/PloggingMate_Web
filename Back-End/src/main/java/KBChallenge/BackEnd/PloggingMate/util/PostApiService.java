package KBChallenge.BackEnd.PloggingMate.util;

import java.net.URI;

public interface PostApiService {
    URI getOpenUri();
    Object postApi() throws Exception;
}
