package com.Maintance.Society;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import com.Maintance.Society.Entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Arpitsinh Chauhan
 */
public  interface ImageRepository extends JpaRepository<Image, Long> {
}
