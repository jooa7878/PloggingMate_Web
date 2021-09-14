package KBChallenge.BackEnd.PloggingMate.microdust;

import KBChallenge.BackEnd.PloggingMate.configure.response.ResponseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/app")
@Slf4j
public class MicrodustController {

    private final ResponseService responseService;
    private final MicrodustService microdustService;

    @GetMapping(value = "/v1/microdust")
    public Object checkMicrodustInfos() throws Exception {
        return responseService.getDataResponse(microdustService.getApi());
    }
}
