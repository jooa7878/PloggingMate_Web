package KBChallenge.BackEnd.PloggingMate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class PloggingMateApplication {

	public static void main(String[] args) {
		SpringApplication.run(PloggingMateApplication.class, args);
	}

}
