/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Maintance.Society.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Arpitsinh Chauhan
 */
@Entity
@Table(name = "maintenance")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idmaintenance;
    @Column(name = "username")
    private String username;
    @Column(name = "payment_type")
    private String payment_type;
    @Column(name = "rupess")
    private String rupess;
    @Column(name = "type_events")
    private String type_events;

    public String getType_events() {
        return type_events;
    }

    public void setType_events(String type_events) {
        this.type_events = type_events;
    }

    public Integer getIdmaintenance() {
        return idmaintenance;
    }

    public void setIdmaintenance(Integer idmaintenance) {
        this.idmaintenance = idmaintenance;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPayment_type() {
        return payment_type;
    }

    public void setPayment_type(String payment_type) {
        this.payment_type = payment_type;
    }

    public String getRupess() {
        return rupess;
    }

    public void setRupess(String rupess) {
        this.rupess = rupess;
    }
}
