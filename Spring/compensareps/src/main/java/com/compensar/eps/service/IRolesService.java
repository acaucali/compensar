package com.compensar.eps.service;

import java.util.List;

import com.compensar.eps.model.Roles;



public interface IRolesService {

	public List<Roles> findAll();
	
	
	public Roles findById(Long id);

	
	public Roles save(Roles roles);
	
	
	public void delete(Long id);
	
}
