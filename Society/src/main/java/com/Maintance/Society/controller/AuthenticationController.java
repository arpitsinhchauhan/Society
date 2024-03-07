package com.Maintance.Society.controller;

import com.Maintance.Society.Entity.Image;
import com.Maintance.Society.Entity.Payment;
import com.Maintance.Society.Entity.Vehicle;
import com.Maintance.Society.Entity.feedback;
import com.Maintance.Society.ImageService;
import com.Maintance.Society.PaymentRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Maintance.Society.config.CustomUserDetailsService;
import com.Maintance.Society.config.JwtUtil;
import com.Maintance.Society.feedbackRepository;
import com.Maintance.Society.model.AuthenticationRequest;
import com.Maintance.Society.model.AuthenticationResponse;
import com.Maintance.Society.model.DAOUser;
import com.Maintance.Society.model.UserDTO;
import com.Maintance.Society.vehicleRepository;
import java.io.IOException;
import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@RestController
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    UserRepositry user;

    @Autowired
    private ImageService imageService;

    @Autowired
    PaymentRepositry pay;

    @Autowired
    vehicleRepository vehicle;

    @Autowired
    feedbackRepository feed;

    //login Page
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
            throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }

        UserDetails userdetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        String token = jwtUtil.generateToken(userdetails);
        return ResponseEntity.ok(new AuthenticationResponse(token));
    }

    //Sign up data
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
        return ResponseEntity.ok(userDetailsService.save(user));
    }

    //SignUp Data show in angular
    @GetMapping(value = "/all")
    public List<DAOUser> getAllData() {
        List<DAOUser> data = user.findAll();
        return data;
    }

    //Delete data form Sing up user
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEntity(@PathVariable Long id) {
        try {
            user.deleteById(id);
            return ResponseEntity.ok("Entity deleted successfully");
        } catch (EmptyResultDataAccessException ex) {
            return ResponseEntity.notFound().build(); // ID not found
        }
    }

    //Edit data form User
    @PostMapping("/update")
    public ResponseEntity<String> updateData(@RequestBody DAOUser signUpData) {
        user.save(signUpData);
        return ResponseEntity.ok("Data updated and saved successfully");
    }

    //Check the payment user data
    @PostMapping("/create-user")
    public boolean createUser(@RequestBody DAOUser us) {
        String username = us.getUsername();
        String email = us.getEmail();
        String flatenNo = us.getFlatenNo();

        // Check if the username, email, or flate_no already exists in the database
        DAOUser existingUser = user.findByUsernameOrEmailOrFlatenNo(username, email, flatenNo);
        return existingUser != null;
    }

    // save img
    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
        Image savedImage = imageService.saveImage(file);
        return new ResponseEntity<>("Image uploaded successfully with ID: " + savedImage.getId(), HttpStatus.OK);
    }

    //Img share in angular
    @GetMapping("/Images")
    public ResponseEntity<List<Image>> Images() {
        List<Image> images = imageService.getAllImages();

        if (!images.isEmpty()) {
            return new ResponseEntity<>(images, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/payment")
    public Payment SetPayment(@RequestBody Payment add) {
        pay.save(add);
        return add;
    }

    @GetMapping(value = "/allPay")
    public List<Payment> getAllPayment() {
        List<Payment> data = pay.findAll();
        return data;
    }

    @PostMapping("/Vehicle")
    public Vehicle SetVehicleData(@RequestBody Vehicle add) {
        System.out.println(add);
        vehicle.save(add);
        return add;
    }

    @GetMapping(value = "/Vehicledata")
    public List<Vehicle> getAllVehicledata() {
        List<Vehicle> data = vehicle.findAll();
        return data;
    }

    @PostMapping("/feedback")
    public feedback Setfeedback(@RequestBody feedback add) {
        System.out.println(add);
        feed.save(add);
        return add;
    }
     @RequestMapping(value = "/q1", method = RequestMethod.POST)
    public ResponseEntity<String> a1() throws IOException {
//        return new ResponseEntity<>("a1", HttpStatus.OK);
        return new ResponseEntity<>("redirect:/q2", HttpStatus.SEE_OTHER);
    }

    @RequestMapping(value = "/q2", method = RequestMethod.POST)
    public ModelAndView a2() throws IOException {
        boolean condition = true; // Replace with your logic

        ModelAndView modelAndView = new ModelAndView();

        if (condition) {
            // If true, show q1
            modelAndView.setViewName("redirect:/q1");
        } else {
            // If false, display a2
            modelAndView.setViewName("a2");
            modelAndView.addObject("result", "a2");
        }

        return modelAndView;

    }
}
