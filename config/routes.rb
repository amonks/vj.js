Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }

  get 'me'                                      => 'users#me',          as: 'me'

  get 'scripts'                                 => 'scripts#index',     as: 'scripts'
  get 'realms'                                  => 'realms#index',      as: 'realms'
  get 'users'                                   => 'users#index',       as: 'users'

  get 'realms/new'                              => 'realms#new',        as: 'new_realm'
  get 'scripts/new'                             => 'scripts#new',       as: 'new_script'



  get ':nickname/realms/:realm_title'           => 'realms#show',       as: :realm
  get ':nickname/realms/:realm_title/display'   => 'realms#display',    as: 'display_realm'
  get ':nickname/realms/:realm_title/edit'      => 'realms#edit',       as: 'edit_route'
  get ':nickname/realms/:realm_title/raw'       => 'realms#raw',        as: 'raw_realm'

  get ':nickname/realms'                        => 'users#show',        as: 'user_realms'

  get ':nickname/:script_title'                 => 'scripts#show',      as: :script
  get ':nickname/:script_title/edit'            => 'scripts#edit',      as: 'edit_script'
  # get ':nickname/:script_title/bless'         => 'realms#new',        as: 'new_realm'

  get ':nickname'                               => 'users#show',        as: :user



  post 'scripts'                                => 'scripts#create'
  patch 'scripts/:id'                           => 'scripts#update'
  put 'scripts/:id'                             => 'scripts#update'
  delete 'scripts/:id'                          => 'scripts#destroy'

  post 'realms'                                 => 'realms#create'

  patch 'realms/:id'                            => 'realms#update'
  put 'realms/:id'                              => 'realms#update'
  delete 'realms/:id'                           => 'realms#destroy'

  root                                             'welcome#index'

end
