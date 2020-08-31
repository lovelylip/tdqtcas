package com.silk.casme.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;

/**
 * Properties specific to Tdqtcas.
 * <p>
 * Properties are configured in the application.yml file.
 * See {@link io.github.jhipster.config.JHipsterProperties} for a good example.
 */
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
@PropertySource("classpath:config/application.properties")
public class ApplicationProperties {
	private String domainCas;
	private String https;
	/**
	 * @return the domainCas
	 */
	public String getDomainCas() {
		return domainCas;
	}
	/**
	 * @param domainCas the domainCas to set
	 */
	public void setDomainCas(String domainCas) {
		this.domainCas = domainCas;
	}
	/**
	 * @return the https
	 */
	public String getHttps() {
		return https;
	}
	/**
	 * @param https the https to set
	 */
	public void setHttps(String https) {
		this.https = https;
	}
	public ApplicationProperties() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ApplicationProperties(String domainCas, String https) {
		super();
		this.domainCas = domainCas;
		this.https = https;
	}
	
	
}
