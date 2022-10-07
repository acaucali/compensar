package com.compensar.eps.auth;

public class JwtConfig {
	
	public static final String LLAVE_SECRETA="compensar.app.compeneps2022";

	public static final String RSA_PRIVATE ="-----BEGIN RSA PRIVATE KEY-----\r\n" + 
			"MIIEpAIBAAKCAQEA7gI0H2T5TyNDHwGMY2Ekx+Y00848D+iBJ2KelvEHrLSe/opp\r\n" + 
			"ffebVdz2x87r+W+IWyCqqJErs/I3RZ6dXR48+0KZKSH7s5zkrLZAoBPfGn6dsseq\r\n" + 
			"EfNhNPKghYnUseAxgXWAG8mi23srHPzc0blmAH3ihQQN4TmDPU+bsO7WnnOxO+Xl\r\n" + 
			"wrM3c18Bo1C1FKHrZGF8DbYSObC98Pa5ZpltbsA7lkJAgFQqhLRMpm+jddLQ1eHd\r\n" + 
			"V7RF+BNvIdfNUCfEUPGYWx3JKajncaxUySK1/0EeMxnDNRPndh1EIC8HREIPVwF2\r\n" + 
			"zFhgkPhjv8dT1JilwM6JBx74RwJc9eyHT9DipwIDAQABAoIBACWBFWOJDrwIq2/8\r\n" + 
			"V3nled1CCjsB+XbsRUXGhYT1cCcnwxILD3p5BPIvwndTxN1mVM8/Q4UScxeE6G7B\r\n" + 
			"Ar0EoclaAjZ4E2iHJYWNpntTBknvf7wHOGZhuoSUYvUH9gsdb8+di1VVnaMGMpH7\r\n" + 
			"ynQFyevz6jjZnbJK1MJZhAgKaqlG9e2W65Xz0biM6aP29wSL/I2XVBn2Nr4DfYlA\r\n" + 
			"NiEMAYbYetzKgwIFyiWrJu/uoTjQB1qVVEmxcYnvK++N8hWQJzVx+rLUO+fh5nfN\r\n" + 
			"dvy4RtBGr9gQ5Z0U0TII3A6bdJQ9k12WKqsmXdrklpItHDlVHdeYSNbfy4yJJMNz\r\n" + 
			"wAhzSGECgYEA+y9PURS7T7Z/K7ta5bDRp+iGjM6oWcYyrSUkjkc9Y7+8p8mYP7yK\r\n" + 
			"JxEwRU6MiiyDdw70gzDFYja1E8VDrXpNBsuBhEKuYtF1mz4Q77v+0VPlYepOhM57\r\n" + 
			"336RJFC7B6kUtZpe1qJzI6u/Q+/p1wdGC8WRxmcjBw+4MCUxZBeJ5BcCgYEA8pI7\r\n" + 
			"RvF1uC69uHvwFY5TxNINBEkJMP8NCYO3A8Aj4CpEQpUtGCDBHCFOhKbNbdT98C8T\r\n" + 
			"QiFvw5HBXnE7Kgk2UWZfPjFM8vjKdGR+TBV2gMd7XR+/xjKTNxILvN1F3Fz6C9g2\r\n" + 
			"cDzoddrf/rL+UtKYJ/tuuZKoEbtAU4WINUlMv/ECgYBZTWShqwE9QeDMp3uVldu0\r\n" + 
			"GpNblE1+PVze+gmZG/LTd+OWs7GRV3K2mQHUYizNIy5KMeL0kW5bkJ+oO8Xn80dX\r\n" + 
			"Vxrg7uQY9eceHl7fHLNnsLAos6jexpp7xv/LLXiRLKfUOOHm5TKSSAlkGfPFIyzg\r\n" + 
			"GonNQ/XMGOafF1oL/+JiWQKBgQDIn+GfH345w47u0rMTYRAvrXtOnAmaGJjz0ZjA\r\n" + 
			"5V3Gva6PU0pktlKBrZp/ZGZr/Mm6qXTIMVd67UZ9kjFY5x2h3YXQrn3yR4tLEQLU\r\n" + 
			"crv8bwC9WNEIYDQaTDahEnIBfHTi7wS3d+jb8RdqVSi736oxB2fg3Eddwv3FFqA9\r\n" + 
			"Uk7EQQKBgQDI3Bg7cnDyYdjn/dNagsDuCRzlQwFBuY3VWlTMfOgk1s31gjxo+Mor\r\n" + 
			"fgeRAh+5KqYL72Jvc9EgiqKamQMJ0W9eyeQvCqlvIfZe4ZOHiR5wEgrqm0ouhnpn\r\n" + 
			"ZPW+3kcS/gMyQzZEhLqmRFVgkFBxo8J9OHV56Ii6hImxXG+A2VTrzQ==\r\n" + 
			"-----END RSA PRIVATE KEY-----";
	
	public static final String RSA_PUBLIC ="-----BEGIN PUBLIC KEY-----\r\n" + 
			"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7gI0H2T5TyNDHwGMY2Ek\r\n" + 
			"x+Y00848D+iBJ2KelvEHrLSe/oppffebVdz2x87r+W+IWyCqqJErs/I3RZ6dXR48\r\n" + 
			"+0KZKSH7s5zkrLZAoBPfGn6dsseqEfNhNPKghYnUseAxgXWAG8mi23srHPzc0blm\r\n" + 
			"AH3ihQQN4TmDPU+bsO7WnnOxO+XlwrM3c18Bo1C1FKHrZGF8DbYSObC98Pa5Zplt\r\n" + 
			"bsA7lkJAgFQqhLRMpm+jddLQ1eHdV7RF+BNvIdfNUCfEUPGYWx3JKajncaxUySK1\r\n" + 
			"/0EeMxnDNRPndh1EIC8HREIPVwF2zFhgkPhjv8dT1JilwM6JBx74RwJc9eyHT9Di\r\n" + 
			"pwIDAQAB\r\n" + 
			"-----END PUBLIC KEY-----";
}
