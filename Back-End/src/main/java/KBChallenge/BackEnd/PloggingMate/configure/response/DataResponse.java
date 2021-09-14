package KBChallenge.BackEnd.PloggingMate.configure.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class DataResponse<T> extends CommonResponse {

    private T result;
}
