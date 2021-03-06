﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34014
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PaginationPlugin.Models
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.Data;
	using System.Collections.Generic;
	using System.Reflection;
	using System.Linq;
	using System.Linq.Expressions;
	using System.ComponentModel;
	using System;
	
	
	[global::System.Data.Linq.Mapping.DatabaseAttribute(Name="Announcements")]
	public partial class PaginationPluginDataAccessDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Extensibility Method Definitions
    partial void OnCreated();
    partial void InsertAnnouncementData(AnnouncementData instance);
    partial void UpdateAnnouncementData(AnnouncementData instance);
    partial void DeleteAnnouncementData(AnnouncementData instance);
    #endregion
		
		public PaginationPluginDataAccessDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["AnnouncementsConnectionString"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public PaginationPluginDataAccessDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public PaginationPluginDataAccessDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public PaginationPluginDataAccessDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public PaginationPluginDataAccessDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public System.Data.Linq.Table<AnnouncementData> AnnouncementDatas
		{
			get
			{
				return this.GetTable<AnnouncementData>();
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.AnnouncementData")]
	public partial class AnnouncementData : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _AnnouncementID;
		
		private System.DateTime _AnnouncementDate;
		
		private string _AnnouncementContent;
		
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnAnnouncementIDChanging(int value);
    partial void OnAnnouncementIDChanged();
    partial void OnAnnouncementDateChanging(System.DateTime value);
    partial void OnAnnouncementDateChanged();
    partial void OnAnnouncementContentChanging(string value);
    partial void OnAnnouncementContentChanged();
    #endregion
		
		public AnnouncementData()
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnnouncementID", DbType="Int NOT NULL", IsPrimaryKey=true)]
		public int AnnouncementID
		{
			get
			{
				return this._AnnouncementID;
			}
			set
			{
				if ((this._AnnouncementID != value))
				{
					this.OnAnnouncementIDChanging(value);
					this.SendPropertyChanging();
					this._AnnouncementID = value;
					this.SendPropertyChanged("AnnouncementID");
					this.OnAnnouncementIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnnouncementDate", DbType="DateTime2 NOT NULL")]
		public System.DateTime AnnouncementDate
		{
			get
			{
				return this._AnnouncementDate;
			}
			set
			{
				if ((this._AnnouncementDate != value))
				{
					this.OnAnnouncementDateChanging(value);
					this.SendPropertyChanging();
					this._AnnouncementDate = value;
					this.SendPropertyChanged("AnnouncementDate");
					this.OnAnnouncementDateChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnnouncementContent", DbType="NVarChar(3000)")]
		public string AnnouncementContent
		{
			get
			{
				return this._AnnouncementContent;
			}
			set
			{
				if ((this._AnnouncementContent != value))
				{
					this.OnAnnouncementContentChanging(value);
					this.SendPropertyChanging();
					this._AnnouncementContent = value;
					this.SendPropertyChanged("AnnouncementContent");
					this.OnAnnouncementContentChanged();
				}
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
	}
}
#pragma warning restore 1591
