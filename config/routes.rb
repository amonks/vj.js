Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }

  root 'welcome#index'

  get 'me' => 'users#me',                                               as: 'me'

  resources :scripts, only: [:index]
  resources :realms, only: [:index]
  # resources :realms
  resources :users, :path => '', param: :nickname do
    resources :scripts, :path => '', param: :script_title, only: [:new, :create, :show, :edit, :update, :destroy]
    resources :realms, param: :realm_title, only: [:new, :create, :show, :edit, :update, :destroy]
  end

  # get 'realms/:id/raw' => 'realms#raw',                                 as: 'raw_realm'
  # get ':nickname/realms/:realm_title/display' => 'realms#display_by_user', as: 'display_realm'



end
