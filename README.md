# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

##Usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|index:true, null: false, unique:true|
|email|string|null:false|
|password|string|null:false|

### Association
- has_many :groups, through :members
- has many :messages
- has meny :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|text||
|image|string||
|group_id|integer|null :false, foreign_key: true|
|user_id|integer|null :false, foreign_key: true|

### Association
- belongs to :user
- belongs to :group




## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association

- has many : massages
- has many : members
- has many : users, through :member


