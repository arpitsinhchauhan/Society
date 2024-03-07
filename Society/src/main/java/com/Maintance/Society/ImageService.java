package com.Maintance.Society;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import com.Maintance.Society.Entity.Image;
import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Arpitsinh Chauhan
 */
@Service
 public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

 

    public Image saveImage(MultipartFile file) throws IOException {
        Image image = new Image();
        image.setImageData(file.getBytes());
        return imageRepository.save(image);
    }

    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }

   

}
