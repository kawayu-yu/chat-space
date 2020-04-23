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

## usersテーブル
|Column|type|Options|
|------|----|-------|
|username|string|null:false|
|email|string|null:false, unique: true|
|password|string|null: false|
## Association
- has_many :groups
- has_many :messages
- has_many :groups_users
- has_many :users, throught: :groups_users

## groupsテーブル
|Column|type|Options|
|------|----|-------|
|groupname|string|null:false|
|user_id|integer|null:false, foreign_key:true|
## Association
- belongs_to :user
- has_many :messages
- has_many :groups_members
- has_many :users, through: :groups_users

## groups_usersテーブル
|Column|type|Options|
|------|----|-------|
|group_id|integer|null:false, foreign_key:true|
|user_id|integer|null:false, foreign_key:true|
## Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|type|Options|
|------|----|-------|
|body|text|nill:false|
|image|text||
|user_id|integer|null:false, foreign_key:true|
|group_id|integer|null:false, foreign_key:true|
## Association
belongs_to :user
belongs_to :group