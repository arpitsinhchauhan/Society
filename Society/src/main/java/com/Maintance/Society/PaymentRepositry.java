/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Maintance.Society;

import com.Maintance.Society.Entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Arpitsinh Chauhan
 */
@Repository
public interface PaymentRepositry extends JpaRepository<Payment, Integer> {
    
}