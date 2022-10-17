/**
 * Input event type
 */
export enum PolicyInputEventType {
    TimerEvent = 'TimerEvent',
    StartTimerEvent = 'StartTimerEvent',
    StopTimerEvent = 'StopTimerEvent',
    RefreshEvent = 'RefreshEvent',
    RunEvent = 'RunEvent',
    ReleaseEvent = 'ReleaseEvent',
    PopEvent = 'PopEvent',
    RestoreEvent = 'RestoreEvent'
}

/**
 * Output event type
 */
export enum PolicyOutputEventType {
    TimerEvent = 'TimerEvent',
    RunEvent = 'RunEvent',
    RefreshEvent = 'RefreshEvent',
    DropdownEvent = 'DropdownEvent',
    Confirm = 'Confirm',
    CreateGroup = 'CreateGroup',
    JoinGroup = 'JoinGroup',
    SignatureQuorumReachedEvent= 'SignatureQuorumReachedEvent',
    SignatureSetInsufficientEvent= 'SignatureSetInsufficientEvent',
    SkipEvent = 'SkipEvent',
    ErrorEvent = 'ErrorEvent'
}

/**
 * Event actor
 */
export enum EventActor {
    Owner = 'owner',
    Issuer = 'issuer',
    EventInitiator = '',
}
