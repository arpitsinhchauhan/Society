/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Maintance.Society.controller;

import com.Maintance.Society.Entity.Society;
import com.Maintance.Society.model.DAOUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Arpitsinh Chauhan
 */
@Repository
public interface UserRepositry extends JpaRepository<DAOUser, Long> {

    @Override
    public void deleteById(Long id);

    public DAOUser findByUsernameOrEmailOrFlatenNo(String username, String email, String flatenNo);
    

}
