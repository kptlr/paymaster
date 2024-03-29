package ru.kptlr.paymaster;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import ru.kptlr.paymaster.configuration.TelegramConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({TelegramConfigurationProperties.class})
public class PaymasterApplication {

	public static void main(String[] args) {
		SpringApplication.run(PaymasterApplication.class, args);
	}

}
