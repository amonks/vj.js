Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }

  resources :scripts
  resources :realms
  resources :users, param: :nickname do
    resources :scripts, param: :script_title
    resources :realms, param: :realm_title
  end

  # get 'realms/:id/raw' => 'realms#raw',                                 as: 'raw_realm'
  # get ':nickname/realms/:realm_title/display' => 'realms#display_by_user', as: 'display_realm'


  get 'me' => 'users#me',                                               as: 'me'

  root 'welcome#index'

end
