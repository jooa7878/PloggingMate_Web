package KBChallenge.BackEnd.PloggingMate.microdust.dto;

import lombok.*;

@Getter
@AllArgsConstructor
@Builder
public class MicrodustDto {

    private String khaiValue;
    private String pm10Value;
    private String khaiGrade;
    private String dataTime;
    private String pm10Grade;

}
