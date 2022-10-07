package com.compensar.eps.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.compensar.eps.dao.IUsuarioDao;
import com.compensar.eps.model.Usuario;
import com.compensar.eps.service.IUsuarioService;



@Service
public class UsuarioService implements UserDetailsService, IUsuarioService{
	
	private Logger logger = LoggerFactory.getLogger(UsuarioService.class);
	
	@Autowired
	private IUsuarioDao usuarioDao;

	@Override
	@Transactional(readOnly=true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		
		Usuario usuario = usuarioDao.findByUsername(username);
		
		if(usuario == null) {
			logger.error("No existe el usuario "+ username+" en el sistema");
			throw new UsernameNotFoundException("No existe el usuario "+ username+" en el sistema");
		}
		
		//trae los permisos y seguridad del usuario
		List<GrantedAuthority> authorities = usuario.getRoles()
				.stream()
				.map(role -> new SimpleGrantedAuthority(role.getNombre()))
				.peek(authority -> logger.info("Rol: " +authority.getAuthority()))
				.collect(Collectors.toList());
		return new User(usuario.getUsername(), usuario.getPassword(), usuario.getHabilitado(), true, true, true, authorities);
	}
	
	//funciones CRUD usuario
	
	@Transactional(readOnly=true)
	public Usuario findByUsername(String username) {
		
		return usuarioDao.findByUsername(username);
	}
	
	@Transactional(readOnly = true)
	public List<Usuario> findAll() {
		return (List<Usuario>) usuarioDao.findAll(sortByNombreAsc());
	}

	private Sort sortByNombreAsc() {
	   return new Sort(Sort.Direction.ASC, "nombres");
	}
		
	@Transactional(readOnly = true)
	public Usuario findById(Long id) {
		
		return usuarioDao.findById(id).orElse(null);
	}

	@Transactional
	public Usuario save(Usuario usuario) {
		
		return usuarioDao.save(usuario);
	}

	@Transactional
	public void delete(Long id) {
		
		usuarioDao.deleteById(id);
	}

	
}
