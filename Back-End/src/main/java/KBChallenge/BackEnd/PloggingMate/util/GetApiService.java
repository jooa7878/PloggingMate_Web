package KBChallenge.BackEnd.PloggingMate.util;

import java.net.URI;

public interface GetApiService {
    URI getOpenUri();
    Object getApi() throws Exception;
}
