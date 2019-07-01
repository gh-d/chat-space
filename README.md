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
- has_many :groups, through::members
- has_many :messages
- has_many :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|text||
|image|string||
|group_id|integer|null :false, foreign_key: true|
|user_id|integer|null :false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group




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

- has_many : massages
- has_many : members
- has_many : users, through::member


