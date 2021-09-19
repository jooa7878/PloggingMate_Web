package KBChallenge.BackEnd.PloggingMate.park.entity;

import KBChallenge.BackEnd.PloggingMate.configure.response.exception.CustomException;
import KBChallenge.BackEnd.PloggingMate.configure.response.exception.CustomExceptionStatus;
import KBChallenge.BackEnd.PloggingMate.park.entity.dto.CreateParkReq;
import KBChallenge.BackEnd.PloggingMate.util.FirebaseFileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class ParkService {

    private final ParkRepository parkRepository;
    private final FirebaseFileService fileService;

    @Transactional
    public Long createPark(CreateParkReq req, MultipartFile file) {

        if (parkRepository.findByName(req.getName()).isPresent()) {
            throw new CustomException(CustomExceptionStatus.DUPLICATED_PARK);
        }

        String thumnailUri = fileService.upload(file);

        Park park = Park.of(req.getName(), req.getAddress(), thumnailUri);

        Park save = parkRepository.save(park);

        return save.getParkId();
    }
}
