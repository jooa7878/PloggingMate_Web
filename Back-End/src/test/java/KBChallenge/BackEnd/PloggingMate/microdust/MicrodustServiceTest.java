package KBChallenge.BackEnd.PloggingMate.microdust;

import KBChallenge.BackEnd.PloggingMate.configure.RestTemplateConfig;
import KBChallenge.BackEnd.PloggingMate.microdust.dto.MicrodustDto;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.text.SimpleDateFormat;
import java.util.Date;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class MicrodustServiceTest {

    @MockBean
    RestTemplateConfig restTemplateConfig;

    @Autowired
    MicrodustService microdustService;

    @DisplayName("미세먼지 OPEN API를 호출하여 DTO로 변환이 성공한다.")
    @Test
    public void test_getFor_uriBuilder() throws Exception {
        // given
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:00");
        String expectDateTime = simpleDateFormat.format(new Date());

        // when
        MicrodustDto response = microdustService.getApi();

        // then
        Assertions.assertThat(response.getDataTime()).isEqualTo(expectDateTime);
    }
}