package cr.ac.ucr.apiclient.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
/**@SpringBootApplication(exclude ={
        DataSourceAutoConfiguration.class,
        DataSourceTransactionManagerAutoConfiguration.class,
        HibernateJpaAutoConfiguration.class
})**/
@SpringBootApplication(scanBasePackages = { "cr.ac.ucr.apiclient.*" })
@ComponentScan({ "cr.ac.ucr.apiclient.controller","cr.ac.ucr.apiclient.repository", "cr.ac.ucr.apiclient.service" } )
@EntityScan("cr.ac.ucr.apiclient.domain")
@EnableJpaRepositories("cr.ac.ucr.apiclient.repository")
public class LabSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(LabSpringbootApplication.class, args);
    }

    @GetMapping("/greet")
    public String greet(@RequestParam(value = "myName", defaultValue = "World") String name){
        return String.format("Hello %s! ", name);
    }

}
