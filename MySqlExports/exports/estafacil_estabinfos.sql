CREATE DATABASE  IF NOT EXISTS `estafacil` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `estafacil`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: estafacil
-- ------------------------------------------------------
-- Server version	5.7.11-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `estabinfos`
--

DROP TABLE IF EXISTS `estabinfos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estabinfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bairro` varchar(45) DEFAULT NULL,
  `cidade` varchar(45) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL,
  `cep` varchar(9) DEFAULT NULL,
  `responsavel` varchar(45) DEFAULT NULL,
  `cargo` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telresp` varchar(11) DEFAULT NULL,
  `estab_id` int(11) DEFAULT NULL,
  `conveniado` int(11) DEFAULT NULL,
  `conveniado_id` int(11) DEFAULT NULL,
  `valet` int(11) DEFAULT NULL,
  `valet_id` int(11) DEFAULT NULL,
  `estacprop` int(11) DEFAULT NULL,
  `estacperto` int(11) DEFAULT NULL,
  `categs` varchar(100) DEFAULT NULL,
  `obs` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `info_estab_idx` (`estab_id`),
  KEY `info_estac_idx` (`conveniado_id`),
  KEY `info_valet_idx` (`valet_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estabinfos`
--

LOCK TABLES `estabinfos` WRITE;
/*!40000 ALTER TABLE `estabinfos` DISABLE KEYS */;
INSERT INTO `estabinfos` VALUES (1,'dsadsa','dasdad','sa','dsadsadsa','sadsa','dsadas','dsadsa','dasdsa',NULL,1,NULL,1,NULL,1,1,'undefinedbalada,restaurante,gastronomia,',NULL),(2,'dsadas','dsadsa','ds','dsadsadsa','sadas','dsadas','dsadas','dsadsa',NULL,1,NULL,1,NULL,1,1,'undefinedbalada,restaurante,gastronomia,',NULL),(3,'dsadsadsa','dsadsadsa','ds','dsadsadsa','sdasdsadas','dsadas','dsadsa','dsadsa',NULL,1,NULL,1,NULL,1,1,'undefinedbalada,restaurante,gastronomia,',NULL),(4,'dsadsadsa','dsadsadsa','ds','dsadsadsa','Marco','dsadas','dsadsa','dsadsa',NULL,0,NULL,0,NULL,1,1,'undefinedgastronomia,',NULL),(5,'21321321','321312','31','321321321','312312321','312321','12321321','312321',NULL,0,NULL,0,NULL,1,1,'undefinedgastronomia,',NULL),(6,'21312321','321321','21','321321321','12312321','12321321','32131312','312312321',NULL,0,NULL,1,NULL,1,0,'undefinedrestaurante,',NULL),(7,'aaaa','aaaa','aa','aaaaa','aaaaa','aaaa','aaaaa','1111111',9,0,NULL,0,NULL,1,1,'undefinedbalada,',NULL),(8,'dsadsa','sadasdsa','da','sdasda','sadsadsa','sadsadsa','dsadsa','dasdsa',10,0,NULL,0,NULL,1,1,'undefinedbalada,',NULL),(9,'DHSAUHDSA','DUSHUSAH','PR','UDHSAUHDU','DSADSA','SADSASD','DSADSA','DASDSA',12,0,NULL,0,NULL,1,0,'undefinedgastronomia,',NULL),(10,'DSADAS','DSADSA','PR','2132131','SDADDAS','DSADA','DSADAS','DSADA',13,0,NULL,0,NULL,1,0,'undefinedgastronomia,',NULL),(11,'boa vista','Curitiba','pr','321321','jean','faxinheiro','jean@sudoku.com','231321',14,0,NULL,1,NULL,1,0,'undefinedgastronomia,',NULL),(12,'uhdusahduasu','dhsuahdu','sa','213213','ddsa','dsadas','dasdsa','dsads',15,0,NULL,1,NULL,1,0,'Baixa Gastronomia',NULL);
/*!40000 ALTER TABLE `estabinfos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-27 18:58:00
