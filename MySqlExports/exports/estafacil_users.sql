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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `carroid` int(11) DEFAULT NULL,
  `imagem` blob,
  `nivel` int(11) NOT NULL DEFAULT '0',
  `password` varchar(45) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Marco',NULL,'marco.silva@gmail.com',1,NULL,0,'',NULL),(2,'Jean','Cavalheiro','cavalheiro.jean1@gmail.com',2,NULL,3,'1234','jeanc'),(3,'Marco',NULL,'marco.silva@gmail.com',1,NULL,0,'',NULL),(4,'alguem',NULL,NULL,NULL,NULL,0,'1234',NULL),(5,'Marco Silva',NULL,'marco@hotmail.com',NULL,NULL,0,'abc123',NULL),(6,'Marco Silva',NULL,'marco@hotmail.com',NULL,NULL,0,'abc123',NULL),(7,'Marco Silva',NULL,'marco@hotmail.com',NULL,NULL,0,'abc123',NULL),(8,'UHSADH',NULL,'UDSAH',NULL,NULL,0,'DSAHU',NULL),(9,'UHSADH',NULL,'UDSAH',NULL,NULL,0,'DSAHU',NULL),(10,'ddasdas',NULL,'dasdsa',NULL,NULL,0,'dsadsa',NULL),(11,'sadasd',NULL,'asdsa',NULL,NULL,0,'dsadsa',NULL),(12,'Marco Silva',NULL,'marco@hotmail.com',NULL,NULL,0,'abc123',NULL),(13,'Marco Aurélio Silva',NULL,'marcosilva994@gmail.com',NULL,NULL,0,'abc123',NULL),(14,'saddsa',NULL,'dasdsa',NULL,NULL,0,'dsadsa',NULL),(15,'sdad',NULL,'dsadsasda',NULL,NULL,0,'dsadsa',NULL),(16,'sdad',NULL,'dsadsasda',NULL,NULL,0,'dsadsa',NULL),(17,'sdadsad',NULL,'saddas',NULL,NULL,0,'21321',NULL),(18,'dsadas',NULL,'dasdsa',NULL,NULL,0,'dsadsa',NULL),(19,'32121',NULL,'21321',NULL,NULL,0,'312321',NULL),(20,'dsadasdsa',NULL,'dsadsadsa',NULL,NULL,0,'dsadsa',NULL),(21,'sasaddsa',NULL,'dsadsa',NULL,NULL,0,'sa',NULL),(22,'sadasdsa',NULL,'dsadsa',NULL,NULL,0,'dasdsa',NULL),(23,'dsadsa',NULL,'dasdsa',NULL,NULL,0,'asddsa',NULL),(24,'dasdsad',NULL,'sadasdsa',NULL,NULL,0,'dasdsa',NULL),(25,'dasdsad',NULL,'sadasdsa',NULL,NULL,0,'dasdsa',NULL),(26,'dsadasd',NULL,'dasdsadas',NULL,NULL,0,'dsada',NULL),(27,'sadsa',NULL,'dsadas',NULL,NULL,0,'dasdsa',NULL),(28,'marco',NULL,'marco@marco',NULL,NULL,0,'1232',NULL),(29,'KKK',NULL,'kkk@kkk',NULL,NULL,0,'dasdsa',NULL),(30,'DSADSADSA',NULL,'DSADSADSA',NULL,NULL,0,'abc123',NULL),(31,'dsadsadsa',NULL,'dsadsadas',NULL,NULL,0,'dsadsa',NULL),(32,'dasdasdsa',NULL,'dsadsadas',NULL,NULL,0,'dsadasdas',NULL),(33,'dsadsadas',NULL,'dsadsadas',NULL,NULL,0,'dasdas',NULL),(34,'dasdsa',NULL,'adsdasdas',NULL,NULL,0,'dsadsa',NULL),(35,'dsadasdsadsa',NULL,'dsadsadsa',NULL,NULL,0,'dsadas',NULL),(36,'dsadsadsa',NULL,'dsadsadsa',NULL,NULL,0,'dsadsa',NULL),(37,'dsadsadas',NULL,'dsadasdas',NULL,NULL,0,'dsadas',NULL),(38,'sadasda',NULL,'dsadsadas',NULL,NULL,0,'dasdas',NULL),(39,'sdadasdas',NULL,'dsadas',NULL,NULL,0,'dsadsa',NULL),(40,'dasdsa',NULL,'dsadsadas',NULL,NULL,0,'dsadsa',NULL),(41,'dasdasdsa',NULL,'dsadsadsa',NULL,NULL,0,'dsadsa',NULL),(42,'Marco Aurélio',NULL,'marco.aurelio@hotmail.com',NULL,NULL,0,'abc123',NULL),(43,'sadasdsa',NULL,'dasdsa',NULL,NULL,0,'dsasda',NULL),(44,'dsadsa',NULL,'dsadas',NULL,NULL,0,'dsadsa',NULL),(45,'dsadsa',NULL,'dsadsa',NULL,NULL,0,'dasdsa',NULL),(46,'dasdsadas',NULL,'dsadasdas',NULL,NULL,0,'dsadsa',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
