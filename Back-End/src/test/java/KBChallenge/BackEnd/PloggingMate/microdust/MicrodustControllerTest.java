package KBChallenge.BackEnd.PloggingMate.microdust;

import KBChallenge.BackEnd.PloggingMate.microdust.dto.MicrodustDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
class MicrodustControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MicrodustService microdustService;



    @DisplayName("미세먼지 정보 조회")
    @Test
    public void test() throws Exception {
        // given
        MicrodustDto microdustDto = MicrodustDto.builder()
                .khaiGrade("1")
                .khaiValue("47")
                .build();

        given(microdustService.getApi()).willReturn(microdustDto);
        // when
        ResultActions result = mockMvc.perform(get("/app/v1/microdust")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON));
        // then
        result.andExpect(status().isOk());
        verify(microdustService).getApi();
    }
}