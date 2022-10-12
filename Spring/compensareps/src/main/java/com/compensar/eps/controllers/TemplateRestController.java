package com.compensar.eps.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.compensar.eps.dto.ConsolidadoData;
import com.compensar.eps.service.IExcelService;

@CrossOrigin(origins= {"http://localhost:4200","*"})
@RestController
@RequestMapping("/api/compensar")
public class TemplateRestController {

	private final Logger log = LoggerFactory.getLogger(TemplateRestController.class);
	
	@Autowired
	private IExcelService excelService;
	
	@Secured({"ROLE_ADMIN","ROLE_USER"})
	@PostMapping("/extract/excel") // //new annotation since 4.3
	public List<ConsolidadoData> singleFileUpload(@RequestParam("file") MultipartFile file) {

		log.debug("Request file: {}", file.getOriginalFilename());
		return excelService.extractDataExcel(file);

	}
	
}
