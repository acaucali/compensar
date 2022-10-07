package com.compensar.eps.service;

import java.util.List;

import com.compensar.eps.model.Usuario;



public interface IUsuarioService {
	
	public Usuario findByUsername(String username);
	
	public List<Usuario> findAll();
	
	
	public Usuario findById(Long id);

	
	public Usuario save(Usuario usuario);
	
	
	public void delete(Long id);
	
}
