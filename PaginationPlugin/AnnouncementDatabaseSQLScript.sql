USE [master]
GO

/****** Object:  Database [Announcements]    Script Date: 11/8/2015 12:22:48 AM ******/
CREATE DATABASE [Announcements]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Announcements', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\Announcements.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Announcements_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\Announcements_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO

ALTER DATABASE [Announcements] SET COMPATIBILITY_LEVEL = 110
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Announcements].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [Announcements] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [Announcements] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [Announcements] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [Announcements] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [Announcements] SET ARITHABORT OFF 
GO

ALTER DATABASE [Announcements] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [Announcements] SET AUTO_CREATE_STATISTICS ON 
GO

ALTER DATABASE [Announcements] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [Announcements] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [Announcements] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [Announcements] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [Announcements] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [Announcements] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [Announcements] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [Announcements] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [Announcements] SET  DISABLE_BROKER 
GO

ALTER DATABASE [Announcements] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [Announcements] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [Announcements] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [Announcements] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [Announcements] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [Announcements] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [Announcements] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [Announcements] SET RECOVERY FULL 
GO

ALTER DATABASE [Announcements] SET  MULTI_USER 
GO

ALTER DATABASE [Announcements] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [Announcements] SET DB_CHAINING OFF 
GO

ALTER DATABASE [Announcements] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [Announcements] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO

ALTER DATABASE [Announcements] SET  READ_WRITE 
GO


