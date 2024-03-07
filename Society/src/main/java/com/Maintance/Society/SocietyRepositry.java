/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Maintance.Society;

import com.Maintance.Society.Entity.Society;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Arpitsinh Chauhan
 */
@Repository
public interface SocietyRepositry extends JpaRepository<Society, Integer> {

    public void deleteById(Integer id);

    public Society findByUsernameOrEmailOrFlateNo(String username, String email, String flateNo);

    public User findByUsername(String username);


}
