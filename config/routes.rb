Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }

  root 'welcome#index', as: 'dashboard'

  resources :docs

  post ':user_nickname/scripts' => 'scripts#create', as: "user_script_index"
  post ':user_nickname/realms' => 'realms#create', as: 'user_realm_index'
  post ':user_nickname/realms/:realm_title/externals' => 'externals#create', as: 'user_realm_externals'

  resources :users, only: [:index]
  resources :scripts, only: [:index]
  resources :realms, only: [:index]

  get ':user_nickname/scripts' => 'scripts#index', as: 'user_scripts'
  get ':user_nickname/realms' => 'realms#index', as: 'user_realms'

  get ':user_nickname/realms/:title/display' => 'realms#display', as: 'display_user_realm'

  resources :users, path: '', only: [:show], param: :nickname do
    resources :realms,
              path: '/realms',
              param: :title,
              as: :realm,
              only: [:show, :edit, :update, :destroy] do
                resources :externals,
                          path: '/externals',
                          param: :export,
                          as: :external,
                          only: [:show, :edit, :update, :destroy]
              end
    resources :scripts,
              path: '',
              param: :title,
              only: [:new, :show, :edit, :update, :destroy],
              as: :script
  end

  get ':user_nickname/:title/realmify' => 'scripts#realmify', as: 'realmify_user_script'

end
