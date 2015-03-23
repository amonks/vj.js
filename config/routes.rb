Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }

  # resources :scripts
  # resources :realms
  # resources :users

  get 'scripts' => 'scripts#index',                                     as: 'scripts'
  get ':nickname/:script_title' => 'scripts#show_by_user',              as: 'user_scripts'
  post 'scripts' => 'scripts#create'
  get 'scripts/new' => 'scripts#new',                                   as: 'new_script'
  get 'scripts/:id/edit' => 'scripts#edit',                             as: 'edit_script'
  get 'scripts/:id' => 'scripts#show',                                  as: 'script'
  patch 'scripts/:id' => 'scripts#update'
  put 'scripts/:id' => 'scripts#update'
  delete 'scripts/:id' => 'scripts#destroy'

  get 'realms' => 'realms#index',                                       as: 'realms'
  get ':nickname/realms' => 'users#show',                               as: 'user_realms'
  post 'realms' => 'realms#create'
  get ':nickname/realms/:realm_title' => 'realms#show_by_user',         as: 'realm'
  get 'realms/:id/raw' => 'realms#raw',                                 as: 'raw_realm'
  get ':nickname/realms/:realm_title/display' => 'realms#display_by_user', as: 'display_realm'
  get 'realms/new' => 'realms#new',                                     as: 'new_realm'
  # get ':nickname/:script_title/bless' => 'realms#new',                  as: 'new_realm'

  get 'realms/:id/edit' => 'realms#edit',                               as: 'edit_route'
  patch 'realms/:id' => 'realms#update'
  put 'realms/:id' => 'realms#update'
  delete 'realms/:id' => 'realms#destroy'

  get 'users' => 'users#index',                                         as: 'users'
  get 'me' => 'users#me',                                               as: 'me'
  get ':nickname' => 'users#show',                                      as: 'user'


  root 'welcome#index'

end
