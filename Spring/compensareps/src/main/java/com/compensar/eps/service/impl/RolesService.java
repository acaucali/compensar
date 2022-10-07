package com.compensar.eps.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.compensar.eps.dao.IRolesDao;
import com.compensar.eps.model.Roles;
import com.compensar.eps.service.IRolesService;



@Service
public class RolesService implements IRolesService{
	
	@Autowired
	private IRolesDao rolesDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Roles> findAll() {
		return (List<Roles>) rolesDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Roles findById(Long id) {
		
		return rolesDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Roles save(Roles roles) {
		
		return rolesDao.save(roles);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		
		rolesDao.deleteById(id);
	}
	
}
