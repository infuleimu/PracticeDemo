package com.cn.practice_demo.Controller;

        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;
@RestController
public class HelloWorld {
    @RequestMapping("/HelloWorld")
    public String HelloWorld(){
        return  "HelloWorld";
    }

}
