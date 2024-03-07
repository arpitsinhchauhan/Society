/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Maintance.Society;

import com.Maintance.Society.Entity.Vehicle;
import com.Maintance.Society.Entity.feedback;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Arpitsinh Chauhan
 */
@RestController
@CrossOrigin("*")
public class Controller {

    @Autowired
    SocietyRepositry repo;

    @Autowired
    private ImageService imageService;

    @Autowired
    PaymentRepositry pay;

    @Autowired
    vehicleRepository vehicle;

    @Autowired
    feedbackRepository feed;

    @GetMapping("/hellow")
    public String Get() {
        return "Hellow";
    }

//    @PostMapping("/signup")
//    public Society Set(@RequestBody Society add) {
//        System.out.println(add);
//        repo.save(add);
//        return add;
//    }
//    @GetMapping(value = "/all")
//    public List<Society> getAllData() {
//
//        List<Society> data = repo.findAll();
//        return data;
//    }
//    private JwtTokenUtil jwtTokenUtil; // Inject your JWT Utility class here

//    @Autowired
//    public Controller(JwtTokenUtil jwtTokenUtil) {
//        this.jwtTokenUtil = jwtTokenUtil;
//    }
//    @PostMapping("/all")
//    public String login(@RequestBody Society loginRequest) {
//        // Authenticate user (validate credentials), then generate token
//        // Example: Assuming you have a method authenticate(loginRequest) that returns true or false
//        if (!authenticate(loginRequest)) {
//            return "Invalid credentials";
//        } else {
//            return jwtTokenUtil.generateToken(loginRequest.getUsername());
//        }
//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
//        Image savedImage = imageService.saveImage(file);
//        return new ResponseEntity<>("Image uploaded successfully with ID: " + savedImage.getId(), HttpStatus.OK);
//    }
//
//    @GetMapping("/Images")
//    public ResponseEntity<List<Image>> Images() {
//        List<Image> images = imageService.getAllImages();
//
//        if (!images.isEmpty()) {
//            return new ResponseEntity<>(images, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<String> deleteEntity(@PathVariable int id) {
//        try {
//            repo.deleteById(id);
//            return ResponseEntity.ok("Entity deleted successfully");
//        } catch (EmptyResultDataAccessException ex) {
//            return ResponseEntity.notFound().build(); // ID not found
//        }
//    }

//    @PostMapping("/update")
//    public Society updateUser(@RequestBody Society user) {
//        Society existingUser = repo.findById(user.getId()).orElse(null);
//        if (existingUser != null) {
//            existingUser.setUsername(user.getUsername());
//            existingUser.setEmail(user.getEmail());
//            existingUser.setPassword(user.getPassword());
//            existingUser.setFlateNo(user.getFlateNo());
//            repo.save(existingUser);
//            return existingUser;
//        }
//        return null;
//    }

//    private List<Society> userDataStore = new ArrayList<Society>();
//
//    @PostMapping("/checkUserData")
//    public ResponseEntity<Boolean> checkUserData(@RequestBody Society userDataRequest) {
//        // Simulated logic to check if the data exists in the user data store
//        boolean result = userDataStore.stream()
//            .anyMatch(user -> 
//                user.getUsername().equals(userDataRequest.getUsername()) && 
//                user.getEmail().equals(userDataRequest.getEmail()) && 
//                user.getFlateNo().equals(userDataRequest.getFlateNo())
//            );
//        
//        return ResponseEntity.ok(result);
//    }
//    @PostMapping("/create-user")
//    public boolean createUser(@RequestBody DAOUser user) {
//        String username = user.getUsername();
//        String email = user.getEmail();
//        String flateNo = user.getFlate_no();
//
//        // Check if the username or email already exists in the database
//        Society existingUser = repo.findByUsernameOrEmailOrFlateNo(username, email, flateNo);
//        return existingUser != null;
//    }

//    @PostMapping("/payment")
//    public Payment SetPayment(@RequestBody Payment add) {
//        pay.save(add);
//        return add;
//    }
//
//    @GetMapping(value = "/allPay")
//    public List<Payment> getAllPayment() {
//        List<Payment> data = pay.findAll();
//        return data;
//    }

  

//    @PostMapping("/feedback")
//    public feedback Setfeedback(@RequestBody feedback add) {
//        System.out.println(add);
//        feed.save(add);
//        return add;
//    }
}
