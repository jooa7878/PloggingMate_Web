package KBChallenge.BackEnd.PloggingMate.microdust;

import KBChallenge.BackEnd.PloggingMate.microdust.dto.MicrodustDto;
import KBChallenge.BackEnd.PloggingMate.util.GetApiService;
import com.google.gson.Gson;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.lang.reflect.Type;
import java.net.URI;
import java.util.Objects;

@Service
public class MicrodustService implements GetApiService {

    private static final Logger logger = LogManager.getLogger(MicrodustService.class);
    private final RestTemplate restTemplate;
    private final Gson gson;

    @Autowired
    public MicrodustService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
        this.gson = new Gson();
    }

    public MicrodustDto getApi() throws Exception{
        URI uri = getOpenUri();
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<HttpHeaders> entity = new HttpEntity<>(headers);
        String responseBody = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class)
                .getBody();
        MicrodustDto microdustDto = convertToDto(responseBody);

        return microdustDto;
    }

    public URI getOpenUri() {
        String URI = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty";

        UriComponents builder = UriComponentsBuilder.fromHttpUrl(URI)
                .queryParam("serviceKey","JHuHXKqar9eaYv37aBtxQqpUkuYut1gwR4ftzWErk5gLfiUmVviYcKt0HxtdeK3gdYwNlUZu2Td2hFB58uAgrQ==")
                .queryParam("returnType","json")
                .queryParam("numOfRows",1)
                .queryParam("pageNo",1)
                .queryParam("stationName","종로구")
                .queryParam("dataTerm","DAILY")
                .encode()
                .build(false);
        return builder.toUri();
    }

    public MicrodustDto convertToDto(String responseBody) throws IOException{
        JSONArray array = extractJsonArray(responseBody);

        MicrodustDto microdustDto = null;
        for (Object arr : array) {
            microdustDto = gson.fromJson(arr.toString(), (Type) MicrodustDto.class);
        }

        validateMicrodustDto(microdustDto);

        return microdustDto;
    }

    public JSONArray extractJsonArray(String responseBody) {
        JSONObject jsonObject = new JSONObject(responseBody); // getbody

        JSONObject getObject = jsonObject.getJSONObject("response")
                .getJSONObject("body");

        JSONArray array = (JSONArray) getObject.get("items");
        return array;
    }

    public void validateMicrodustDto(MicrodustDto microdustDto) throws IOException{
        if (Objects.isNull(microdustDto)) {
            throw new IOException("Faile to convert to MicrodustDTO");
        }
    }
}
