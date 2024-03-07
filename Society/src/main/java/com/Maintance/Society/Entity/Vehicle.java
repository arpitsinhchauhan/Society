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
@Table(name = "vehicle_data")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idVehicle_Data;
    @Column(name = "flaten_no")
    private String flatenNo;

    @Column(name = "two_wheeler")
    private String two_wheeler;
    @Column(name = "four_wheeler")
    private String four_wheeler;
    @Column(name = "phone_number")
    private String phone_number;

    public Integer getIdVehicle_Data() {
        return idVehicle_Data;
    }

    public void setIdVehicle_Data(Integer idVehicle_Data) {
        this.idVehicle_Data = idVehicle_Data;
    }

//    public String getFlateno() {
//        return flate_no;
//    }
//
//    public void setFlateno(String flate_no) {
//        this.flate_no = flate_no;
//    }
    public String getTwo_wheeler() {
        return two_wheeler;
    }

    public void setTwo_wheeler(String two_wheeler) {
        this.two_wheeler = two_wheeler;
    }

    public String getFour_wheeler() {
        return four_wheeler;
    }

    public void setFour_wheeler(String four_wheeler) {
        this.four_wheeler = four_wheeler;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getFlatenNo() {
        return flatenNo;
    }

    public void setFlatenNo(String flatenNo) {
        this.flatenNo = flatenNo;
    }

}
