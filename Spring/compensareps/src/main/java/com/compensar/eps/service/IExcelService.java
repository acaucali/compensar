package com.compensar.eps.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.compensar.eps.dto.ConsolidadoData;

public interface IExcelService {

	List<ConsolidadoData> extractDataExcel(MultipartFile file);

}
