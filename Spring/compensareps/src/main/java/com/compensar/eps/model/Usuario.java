package com.compensar.eps.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.persistence.JoinColumn;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="usuario")
public class Usuario implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long usuarioId;

	@Size(max=100)
	@Column(nullable=true)
	private String nombres;
	
	@Size(max=100)
	@Column(nullable=true)
	private String apellidos;
	
	@Column(nullable=true)
	private Long identificacion;

	@Column(nullable=true)
	private Long tipoIdentificacion;
	
	@Column(nullable=true)
	private Long telefono;
	
	@Size(max=350)
	@Column(nullable=true)
	private String direccion;
	
	@Size(max=100)
	@Column(nullable=true, unique=true)
	private String email;
	
	@Column(nullable=true)
	private Byte tipoUsuario;
	
	@Size(max=50)
	@Column(nullable=false, unique=true)
	private String username;
	
	@Size(max=500)
	@Column(nullable=false)
	private String password;
		
	@Column(nullable=true)
	private Boolean habilitado;
	
	@ManyToMany(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
	@JoinTable(name="usuarios_roles", joinColumns= @JoinColumn(name="usuario_id"),
	inverseJoinColumns=@JoinColumn(name="rol_id"),
	uniqueConstraints= {@UniqueConstraint(columnNames= {"usuario_id", "rol_id"})})
	@JsonIgnoreProperties(value ={ "hibernateLazyInitializer", "handler", "usuarios" }, allowSetters = true)
	private List<Roles> roles;

	public void addRol(Roles rol){
		
        if(this.roles == null){
            this.roles = new ArrayList<>();
        }
        
        this.roles.add(rol);
    }
	
	
	public Long getUsuarioId() {
		return usuarioId;
	}

	public void setUsuarioId(Long usuarioId) {
		this.usuarioId = usuarioId;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	
	public Long getIdentificacion() {
		return identificacion;
	}

	public void setIdentificacion(Long identificacion) {
		this.identificacion = identificacion;
	}

	public Long getTelefono() {
		return telefono;
	}

	public void setTelefono(Long telefono) {
		this.telefono = telefono;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Byte getTipoUsuario() {
		return tipoUsuario;
	}

	public void setTipoUsuario(Byte tipoUsuario) {
		this.tipoUsuario = tipoUsuario;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getHabilitado() {
		return habilitado;
	}

	public void setHabilitado(Boolean habilitado) {
		this.habilitado = habilitado;
	}
		
	public List<Roles> getRoles() {
		return roles;
	}

	public void setRoles(List<Roles> roles) {
		this.roles = roles;
	}
	
	public Long getTipoIdentificacion() {
		return tipoIdentificacion;
	}

	public void setTipoIdentificacion(Long tipoIdentificacion) {
		this.tipoIdentificacion = tipoIdentificacion;
	}



	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
}
