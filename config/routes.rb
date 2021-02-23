Rails.application.routes.draw do
  root to: "calendars#index"
  resource :calendars, only: [:index, :new, :create]
end
